import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import styles from "@/styles";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Column } from "@/components/ui/Column/Column";

const StudiesSection = memo(() => {
    const studies = PortfolioDataService.getStudies();

    return (
        <div className={styles.myContainer}>
            {studies.map(({ icon, title, description, delay }, index) => (
                <GlassCard key={index} delay={delay}>
                    <Column
                        icon={icon}
                        iconClassName={styles.myIcon}
                        titleClassName={styles.myTitleColumn}
                        title={title}
                        description={description}
                    />
                </GlassCard>
            ))}
        </div>
    );
});

export default StudiesSection;