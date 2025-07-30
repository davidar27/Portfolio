import styles from "@/styles";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Column } from "@/components/ui/Column/Column";
import { memo } from "react";


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

export default StudyCard;