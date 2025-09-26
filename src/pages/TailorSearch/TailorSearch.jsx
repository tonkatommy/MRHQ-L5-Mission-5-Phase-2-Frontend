import Header from "../../sharedComponents/Header/Header";
import Footer from "../../sharedComponents/Footer/Footer";
import HeroSearch from "./components/HeroSearch";
import MapSearch from "./components/MapSearch";
import SearchFilters from "./components/SearchFilters";
import styles from "./TailorSearch.module.css";

function TailorSearch() {
  return (
    <>
      <Header />
      <HeroSearch />
      <SearchFilters />
      <MapSearch />
      <Footer />
    </>
  );
}

export default TailorSearch;
