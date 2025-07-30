import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import styles from "@/styles";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Column } from "@/components/ui/Column/Column";

const TechnicalSkillsSection = memo(() => {
    const technicalSkills = PortfolioDataService.getTechnicalSkills();

    return (
        <div className={styles.myContainer}>
            {technicalSkills.map(({ icon, title, technologies, delay }, index) => (
                <GlassCard key={index} delay={delay}>
                    <Column
                        className="h-100"
                        titleClassName={styles.myTitleColumn}
                        iconClassName={styles.myIcon}
                        technologiesClassName={styles.mytechnologies}
                        icon={icon}
                        title={title}
                        technologies={technologies}
                    />
                </GlassCard>
            ))}
        </div>
    );
});

export default TechnicalSkillsSection;