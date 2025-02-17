
import Card from "./card";

const GridView = () => {
    return (
        <div style = {{display: 'grid', gap: '1.4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))', padding: '10px' }} className="grid-view-container">
            <Card 
            src = "/assets/agsm.webp"
            alt="pic-1"
            textTop = "9"
            textBottom = "AGSM" />

            <Card 
            src = "/assets/ainsworth.webp"
            alt="pic-2"
            textTop = "16"
            textBottom = "Ainsworth Building" />

            <Card 
            src = "/assets/anitab.webp"
            alt="pic-3"
            textTop = "44"
            textBottom = "Anita B Lawrence Centre" />

            <Card 
            src = "/assets/biologicalScience.webp"
            alt="pic-4"
            textTop = "6"
            textBottom = "Biological Science" />

            <Card 
            src = "/assets/biologicalScienceWest.webp"
            alt="pic-5"
            textTop = "8"
            textBottom = "Biological Science (West)" />

            <Card 
            src = "/assets/blockhouse.webp"
            alt="pic-6"
            textTop = "42"
            textBottom = "Blockhouse" />

            <Card 
            src = "/assets/businessSchool.webp"
            alt="pic-7"
            textTop = "18"
            textBottom = "Business School" />

            <Card 
            src = "/assets/civilBuilding.webp"
            alt="pic-8"
            textTop = "8"
            textBottom = "Civil Engineering Building" />

            <Card 
            src = "/assets/colombo.webp"
            alt="pic-9"
            textTop = "5"
            textBottom = "Colombo Building" />


            <Card 
            src = "/assets/cseBuilding.webp"
            alt="pic-10"
            textTop = "7"
            textBottom = "Computer Science & Eng (K17)" />
        </div>
    )
}

export default GridView;