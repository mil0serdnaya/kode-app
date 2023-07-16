import { StyledContainer } from "./components/styled/StyledContainer";
import { SearchBar } from "./components/SearchBar";
import { Tabs } from "./components/Tabs";
import { User } from "./components/User";

export default function Page() {
  return(
    <StyledContainer>
      <SearchBar />
      <Tabs />
      <User />
    </StyledContainer>
  );
}