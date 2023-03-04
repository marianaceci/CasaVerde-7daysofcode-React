import AssinaturaNewsletter from "../../components/AssinaturaNewsletter";
import CardCentral from "../../components/CardCentral";
import Menu from "../../components/Menu";
import Ofertas from "../../components/Ofertas";

function HomePage() {

  return (
    <main>
      <Menu />
      <AssinaturaNewsletter />   
      <CardCentral />
      <Ofertas />
    </main>
  )
}

export default HomePage
