import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData"
import { Carousel } from "@/components/ui/Carousel/Carousel";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";


const ProjectsSection = memo(() => {
    const projects = PortfolioDataService.getProjects();

    const projectCards = projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
    ));

    return (
        <div className="relative z-10">
            <Carousel
                itemsPerPage={3}
                showArrows={true}
                showDots={true}
                autoPlay={false}
                className="max-w-8xl mx-auto"
            >
                {projectCards}
            </Carousel>
        </div>
    );
});

export default ProjectsSection;