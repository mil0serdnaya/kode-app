import { StyledContainer } from "./components/styled/StyledContainer";
import { SearchBar } from "./components/search/SearchBar";
import { Tabs } from "./components/Tabs";

export default function Page() {
  return(
    <StyledContainer>
      <SearchBar />
      <Tabs />
    </StyledContainer>
  );
}