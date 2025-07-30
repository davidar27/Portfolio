import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import styles from "@/styles";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Column } from "@/components/ui/Column/Column";
import { Carousel } from "@/components/ui/Carousel/Carousel";

const TechnicalSkillCard = memo(({ skill, index }: { skill: any; index: number }) => (
    <GlassCard key={index} delay={skill.delay} className="w-97">
        <Column
            className="h-100"
            titleClassName={styles.myTitleColumn}
            iconClassName={styles.myIcon}
            technologiesClassName={styles.mytechnologies}
            icon={skill.icon}
            title={skill.title}
            technologies={skill.technologies}
        />
    </GlassCard>
));

TechnicalSkillCard.displayName = 'TechnicalSkillCard';

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