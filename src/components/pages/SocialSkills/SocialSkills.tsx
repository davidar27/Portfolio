import { Column } from "@/components/ui/Column/Column";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { PortfolioDataService } from "@/services/portfolioData";
import { memo } from "react";
import styles from "@/styles";

const SocialSkillsSection = memo(() => {
    const socialSkills = PortfolioDataService.getSocialSkills();

    return (
        <div className={styles.myContainer}>
            {socialSkills.map(({ icon, title, description, delay }, index) => (
                <GlassCard key={index} delay={delay}>
                    <Column
                        titleClassName={styles.myTitleColumn}
                        iconClassName={styles.myIcon}
                        technologiesClassName={styles.mytechnologies}
                        icon={icon}
                        title={title}
                        description={description}
                    />
                </GlassCard>
            ))}
        </div>
    );
});

export default SocialSkillsSection;