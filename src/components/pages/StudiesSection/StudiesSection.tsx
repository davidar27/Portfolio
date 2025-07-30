import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import styles from "@/styles";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Column } from "@/components/ui/Column/Column";
import { Carousel } from "@/components/ui/Carousel/Carousel";

const StudyCard = memo(({ study, index }: { study: any; index: number }) => (
    <GlassCard key={index} delay={study.delay} className="w-97">
        <Column
            icon={study.icon}
            iconClassName={styles.myIcon}
            titleClassName={styles.myTitleColumn}
            title={study.title}
            description={study.description}
        />
    </GlassCard>
));

StudyCard.displayName = 'StudyCard';

const StudiesSection = memo(() => {
    const studies = PortfolioDataService.getStudies();

    const studyCards = studies.map((study, index) => (
        <StudyCard key={index} study={study} index={index} />
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
                {studyCards}
            </Carousel>
        </div>
    );
});

export default StudiesSection;