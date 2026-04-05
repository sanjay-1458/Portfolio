import { profiles } from "@/assets/assets";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";

const CyberWarArena = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      if (canvas) {
        canvas.width =
          canvas.offsetWidth || canvas.parentElement?.clientWidth || 800;
        canvas.height =
          canvas.offsetHeight || canvas.parentElement?.clientHeight || 400;
      }
    };

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);
    window.addEventListener("resize", resize);
    resize();

    const state = {
      drone: { y: 200, dy: 1.5, nextFire: 0 },
      mech: { y: 200, dy: -1.2, nextFire: 0 },
      projectiles: [],
      effects: [],
      particles: [],
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const minY = 30;
      const maxY = canvas.height - 30;

      state.drone.y += state.drone.dy;
      if (state.drone.y < minY) {
        state.drone.y = minY;
        state.drone.dy *= -1;
      }
      if (state.drone.y > maxY) {
        state.drone.y = maxY;
        state.drone.dy *= -1;
      }

      ctx.fillStyle = "#06b6d4";
      ctx.beginPath();
      ctx.arc(40, state.drone.y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(45, state.drone.y - 2, 14, 4);

      state.mech.y += state.mech.dy;
      if (state.mech.y < minY) {
        state.mech.y = minY;
        state.mech.dy *= -1;
      }
      if (state.mech.y > maxY) {
        state.mech.y = maxY;
        state.mech.dy *= -1;
      }

      ctx.fillStyle = "#ef4444";
      ctx.fillRect(canvas.width - 50, state.mech.y - 18, 22, 36);
      ctx.beginPath();
      ctx.moveTo(canvas.width - 39, state.mech.y + 18);
      ctx.lineTo(canvas.width - 55, state.mech.y + 36);
      ctx.moveTo(canvas.width - 28, state.mech.y + 18);
      ctx.lineTo(canvas.width - 10, state.mech.y + 36);
      ctx.moveTo(canvas.width - 39, state.mech.y - 18);
      ctx.lineTo(canvas.width - 55, state.mech.y - 36);
      ctx.moveTo(canvas.width - 28, state.mech.y - 18);
      ctx.lineTo(canvas.width - 10, state.mech.y - 36);
      ctx.strokeStyle = "#ef4444";
      ctx.lineWidth = 3;
      ctx.stroke();

      if (time > state.drone.nextFire) {
        state.projectiles.push({
          x: 60,
          y: state.drone.y,
          dx: 7,
          color: "#22d3ee",
          from: "drone",
        });
        state.drone.nextFire = time + Math.random() * 1500 + 800;
      }
      if (time > state.mech.nextFire) {
        const aimY = state.drone.y + (Math.random() * 80 - 40);
        state.projectiles.push({
          x: canvas.width - 60,
          y: state.mech.y,
          dx: -7,
          targetY: aimY,
          color: "#f87171",
          from: "mech",
        });
        state.mech.nextFire = time + Math.random() * 1500 + 800;
      }

      for (let i = state.projectiles.length - 1; i >= 0; i--) {
        let p = state.projectiles[i];
        p.x += p.dx;
        if (p.from === "mech") p.y += (p.targetY - p.y) * 0.03;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fillRect(p.x, p.y - 2, 18, 4);
        ctx.shadowBlur = 0;
        if (p.x > canvas.width - 60 && p.from === "drone") {
          state.effects.push({
            type: "shield",
            x: canvas.width - 55,
            y: p.y,
            life: 30,
            color: "#ef4444",
          });
          state.projectiles.splice(i, 1);
          continue;
        }
        if (p.x < 60 && p.from === "mech") {
          state.effects.push({
            type: "shield",
            x: 55,
            y: p.y,
            life: 30,
            color: "#22d3ee",
          });
          state.projectiles.splice(i, 1);
          continue;
        }
        for (let j = i - 1; j >= 0; j--) {
          let p2 = state.projectiles[j];
          if (
            p.from !== p2.from &&
            Math.abs(p.x - p2.x) < 20 &&
            Math.abs(p.y - p2.y) < 20
          ) {
            state.effects.push({
              type: "blackhole",
              x: (p.x + p2.x) / 2,
              y: (p.y + p2.y) / 2,
              life: 120,
              phase: "grow",
              radius: 0,
            });
            state.projectiles.splice(i, 1);
            state.projectiles.splice(j, 1);
            i--;
            break;
          }
        }
      }

      for (let i = state.effects.length - 1; i >= 0; i--) {
        let e = state.effects[i];
        e.life--;
        if (e.type === "shield") {
          ctx.strokeStyle = e.color;
          ctx.lineWidth = 2;
          ctx.globalAlpha = Math.max(0, e.life / 30);
          ctx.beginPath();
          for (let s = 0; s < 6; s++) {
            const angle = (Math.PI / 3) * s;
            const hx = e.x + 25 * Math.cos(angle);
            const hy = e.y + 25 * Math.sin(angle);
            if (s === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.globalAlpha = 1;
        } else if (e.type === "blackhole") {
          if (e.phase === "grow") {
            e.radius += 0.6;
            if (e.radius > 30) e.phase = "shrink";
          } else if (e.phase === "shrink") {
            e.radius -= 1;
            if (e.radius <= 0) {
              e.phase = "blast";
              for (let k = 0; k < 25; k++) {
                state.particles.push({
                  x: e.x,
                  y: e.y,
                  vx: (Math.random() - 0.5) * 12,
                  vy: (Math.random() - 0.5) * 12,
                  life: 35,
                });
              }
            }
          }
          if (e.phase !== "blast") {
            ctx.fillStyle = "#000000";
            ctx.shadowColor = "#a855f7";
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(e.x, e.y, Math.max(0, e.radius), 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
        if (e.life <= 0 || e.phase === "blast") state.effects.splice(i, 1);
      }

      for (let i = state.particles.length - 1; i >= 0; i--) {
        let pt = state.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life--;
        ctx.fillStyle = `rgba(255, 255, 255, ${pt.life / 35})`;
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        if (pt.life <= 0) state.particles.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
  );
};

function Coding() {
  return (
    <section
      id="coding"
      className="bg-[#020617] text-white px-[5%] py-24 scroll-mt-20 overflow-hidden font-sans relative"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(90deg, #06b6d4 1px, transparent 1px), linear-gradient(#06b6d4 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-cyan-600/10 blur-[100px] rounded-full"></div>

        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-scanline"></div>

        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-500/20"></div>

        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-cyan-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 font-mono tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md">
            Milestones
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Achievements<span className="text-cyan-400 animate-pulse">_</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <AchievementCard key={index} profile={profile} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 w-full max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4 px-4">
            <h3 className="text-sm md:text-base font-bold text-cyan-400 font-mono tracking-widest uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              &gt; System.Live_Simulation
            </h3>
            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_#06b6d4]"></span>
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse delay-75 shadow-[0_0_10px_#ef4444]"></span>
            </div>
          </div>

          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl border-2 border-blue-500/30 bg-[#030712]/80 backdrop-blur-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(34,211,238,0.15)] group">
            <CyberWarArena />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-20"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none z-20"></div>
          </div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
}

export default Coding;
