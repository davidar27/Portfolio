import { memo } from "react";
import { PortfolioDataService } from "@/services/portfolioData";
import { Carousel } from "@/components/ui/Carousel/Carousel";
import StudyCard from "@/components/ui/StudyCard/StudyCard";



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