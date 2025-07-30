import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Picture } from "@/components/ui/Picture/Picture";
import { memo } from "react";

const ProjectCard = memo(({ project, index }: { project: any; index: number }) => (
    <GlassCard delay={0.3 + index * 0.1} className="w-97">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full p-6">
            <div className="relative mb-4">
                <Picture 
                    className="w-24 h-24 rounded-xl object-cover border-2 border-[rgba(110,7,243,0.3)]" 
                    src={project.icon} 
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6e07f3] to-[#9945ff] opacity-20 blur-lg"></div>
            </div>

            <h3 className="card-title text-center">
                {project.title}
            </h3>

            <div className="card-description text-center">
                <p>{project.description}</p>
            </div>

            <div className="card-technologies">
                <h4 className="text-sm font-semibold text-[#b366ff] mb-2 text-center w-full">
                    Tecnologías:
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech: string, techIndex: number) => (
                        <span
                            key={techIndex}
                            className="tech-tag"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 mt-4">
                {project.projectUrl && (
                    <motion.a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6e07f3] to-[#9945ff] text-white rounded-lg hover:from-[#9945ff] hover:to-[#b366ff] transition-all duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaExternalLinkAlt />
                        Ver Demo
                    </motion.a>
                )}
                {project.githubUrl && (
                    <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgba(110,7,243,0.2)] to-[rgba(153,69,255,0.1)] backdrop-blur-[20px] text-white rounded-lg border border-[rgba(255,255,255,0.2)] hover:border-[#6e07f3] hover:bg-gradient-to-r hover:from-[rgba(110,7,243,0.3)] hover:to-[rgba(153,69,255,0.2)] transition-all duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub />
                        Código
                    </motion.a>
                )}
            </div>
        </div>
    </GlassCard>
));


export default ProjectCard;
