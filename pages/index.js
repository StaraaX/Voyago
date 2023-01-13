import Header_bottom from "../components/Header_bottom";
import Content from '../components/Content.jsx';
import Testimonials from "../components/Testimonials.jsx";
import Head from "next/head"


export default function Home() {

  return (

    <div>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header_bottom />
      <Content />
      <Testimonials />
    </div>
  )
}
