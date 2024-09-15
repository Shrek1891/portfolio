import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";
import {gridItems} from "@/data";

const Grid = () => {
    return (
        <section id="#about">
            <BentoGrid
                className="w-full py-20"
            >
                {
                    gridItems.map
                    ((item, i) => (
                        <BentoGridItem
                            key={i}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            img={item.img}
                            spareImg={item.spareImg}
                            titleClassName={item.titleClassName}
                            imgClassName={item.imgClassName}
                        />
                    ))
                }

            </BentoGrid>
        </section>

    )
}

export default Grid