"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiCode } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const ExperienceSection = () => {
    const achievements = config.achievements || [];
    const education = config.education || [];

    if ((!achievements || achievements.length === 0) && (!education || education.length === 0)) {
        return null;
    }

    return (
        <section className="py-16 md:py-24" id="experience">
            <div className="container mx-auto px-6">
                {/* Achievements Section */}
                {achievements.length > 0 && (
                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="max-w-2xl mx-auto text-center space-y-6 mb-12">
                            <motion.div
                                variants={itemAnimation}
                                className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                            >
                                <HiBriefcase className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-primary">
                                    Achievements
                                </span>
                            </motion.div>

                            <motion.div variants={itemAnimation} className="space-y-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                    My Achievements
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Highlights of my accomplishments and recognitions
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className="bg-black/50 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <HiBriefcase className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                                                <span className="text-sm text-primary/80">{achievement.date}</span>
                                            </div>
                                            <p className="mt-2 text-white/70">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Education Section */}
                {education.length > 0 && (
                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <div className="max-w-2xl mx-auto text-center space-y-6 mb-12">
                            <motion.div
                                variants={itemAnimation}
                                className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                            >
                                <HiBriefcase className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium text-primary">
                                    Education
                                </span>
                            </motion.div>

                            <motion.div variants={itemAnimation} className="space-y-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                    My Education
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    My academic journey and qualifications
                                </p>
                            </motion.div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                variants={containerAnimation}
                                className="space-y-8"
                            >
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemAnimation}
                                        className="relative group"
                                    >
                                        <div className="flex gap-6">
                                            {/* Timeline line */}
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 rounded-xl bg-black border border-white/30 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                                    <HiCode className="w-6 h-6 text-primary" />
                                                </div>
                                                {index !== education.length - 1 && (
                                                    <div className="w-0.5 h-full bg-gradient-to-b from-primary/20 to-transparent mt-4" />
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 pb-8">
                                                <div className="bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_10px_rgba(255,255,255,0.05)] hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)]">
                                                    <div className="relative z-10">
                                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                                            <div>
                                                                <h3 className="text-xl font-bold text-white mb-1">
                                                                    {edu.degree}
                                                                </h3>
                                                                <p className="text-primary/80 font-medium">
                                                                    {edu.institution}
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-sm text-white/70">
                                                                <HiCalendar className="w-4 h-4" />
                                                                <span>{edu.period}</span>
                                                            </div>
                                                        </div>

                                                        {edu.location && (
                                                            <p className="text-sm text-white/60 mb-2">
                                                                {edu.location}
                                                            </p>
                                                        )}

                                                        {edu.description && (
                                                            <p className="text-sm text-white/70 leading-relaxed mb-4">
                                                                {edu.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ExperienceSection;

