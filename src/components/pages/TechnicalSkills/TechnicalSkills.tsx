import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import { Carousel } from "@/components/ui/Carousel/Carousel";
import TechnicalSkillCard from "@/components/ui/TechnicalSkillCard/TechnicalSkillCard";



const TechnicalSkillsSection = memo(() => {
    const technicalSkills = PortfolioDataService.getTechnicalSkills();

    const skillCards = technicalSkills.map((skill, index) => (
        <TechnicalSkillCard key={index} skill={skill} index={index} />
    ));

    return (
        <div className="relative z-10">
            <Carousel
                itemsPerPage={3}
                showArrows={true}
                showDots={true}
                autoPlay={false}
                className="max-w-7xl mx-auto"
            >
                {skillCards}
            </Carousel>
        </div>
    );
});

export default TechnicalSkillsSection;