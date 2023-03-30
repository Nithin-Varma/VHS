import {Grid} from "@chakra-ui/react";

import Header from "../src/components/layout/header";
import Landing_View from "../src/components/Landing/First_View";
import Categories from "@/components/Landing/Categories";

const Home = () => {
  return (
    <Grid>
      <Landing_View/>
      <Categories />
    </Grid>
  )
}

export default Home;