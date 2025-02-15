
import Card from "./card";

const GridView = () => {
    return (
        <div style = {{display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', padding: '10px' }} className="grid-view-container">
            <Card 
            src = "/assets/agsm.webp"
            alt="pic-1"
            caption = "test test test" />

            <Card 
            src = "/assets/ainsworth.webp"
            alt="pic-2"
            caption = "test test test" />

            <Card 
            src = "/assets/anitab.webp"
            alt="pic-3"
            caption = "test test test" />

            <Card 
            src = "/assets/biologicalScience.webp"
            alt="pic-4"
            caption = "test test test" />

            <Card 
            src = "/assets/biologicalScienceWest.webp"
            alt="pic-5"
            caption = "test test test" />

            <Card 
            src = "/assets/blockhouse.webp"
            alt="pic-6"
            caption = "test test test" />

            <Card 
            src = "/assets/businessSchool.webp"
            alt="pic-7"
            caption = "test test test" />

            <Card 
            src = "/assets/civilBuilding.webp"
            alt="pic-8"
            caption = "test test test" />

            <Card 
            src = "/assets/colombo.webp"
            alt="pic-9"
            caption = "test test test" />

            <Card 
            src = "/assets/cseBuilding.webp"
            alt="pic-10"
            caption = "test test test" />
        </div>
    )
}

export default GridView;