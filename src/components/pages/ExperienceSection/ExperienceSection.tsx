import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import styles from "@/styles";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Column } from "@/components/ui/Column/Column";
import { Picture } from "@/components/ui/Picture/Picture";

const ExperienceSection = memo(() => {
    const experiences = PortfolioDataService.getExperiences();

    return (
        <div className={`${styles.myContainer} relative z-10`}>
            {experiences.map(({ icon, title, description, technologies }, index) => (
                <GlassCard key={index} delay={0.3}>
                    <Column
                        titleClassName={styles.myTitleColumn}
                        iconClassName={styles.myIcon}
                        descriptionClassName={styles.myDescription}
                        technologiesClassName={styles.mytechnologiesClassName}
                        icon={<Picture className={styles.picture} src={icon} />}
                        title={title}
                        description={description}
                        technologies={technologies}
                    />
                </GlassCard>
            ))}
        </div>
    );
});

export default ExperienceSection;