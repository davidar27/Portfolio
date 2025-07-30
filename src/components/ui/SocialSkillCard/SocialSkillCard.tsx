
import styles from "@/styles";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { Column } from "@/components/ui/Column/Column";
import { memo } from "react";

const SocialSkillCard = memo(({ skill, index }: { skill: any; index: number }) => (
    <GlassCard key={index} delay={skill.delay} className="w-97">
        <Column
            titleClassName={styles.myTitleColumn}
            iconClassName={styles.myIcon}
            technologiesClassName={styles.mytechnologies}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
        />
    </GlassCard>
));
export default SocialSkillCard;