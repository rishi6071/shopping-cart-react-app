import HomeIcon from "@mui/icons-material/Home";
import ShopIcon from '@mui/icons-material/Shop';
import FeedIcon from '@mui/icons-material/Feed';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

// Navbar Links
const NavbarLinks = [
  {
    id: "nav_home",
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: "nav_category",
    name: "Shop",
    path: "/shop",
    icon: <ShopIcon />,
  },
  {
    id: "nav_newsfeed",
    name: "NewsFeed",
    path: "/newsfeed",
    icon: <FeedIcon />,
  },
  {
    id: "nav_contact",
    name: "Contact",
    path: "/contact",
    icon: <PermContactCalendarIcon />,
  },
];

// ProductDetails Section Links
const ProductSectionLinks = [
  {
    id: "section_description",
    name: "Description",
    path: "/product/1",
  },
  {
    id: "section_reviews",
    name: "Reviews",
    path: "/product/1/reviews",
  },
  {
    id: "section_policies",
    name: "Shipping Details",
    path: "/product/1/policies",
  },
];

// News Panel Carousel
const NewsPanel = [
  {
    id: "news_panel",
    name: "Gadgets News",
    path: "#",
  },
];

export default NavbarLinks;
export { ProductSectionLinks, NewsPanel };
