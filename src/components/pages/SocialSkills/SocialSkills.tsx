import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import { Carousel } from "@/components/ui/Carousel/Carousel";
import SocialSkillCard from "@/components/ui/SocialSkillCard/SocialSkillCard";

const SocialSkillsSection = memo(() => {
    const socialSkills = PortfolioDataService.getSocialSkills();

    const skillCards = socialSkills.map((skill, index) => (
        <SocialSkillCard key={index} skill={skill} index={index} />
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

export default SocialSkillsSection;