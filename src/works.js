import { v4 as uuidv4 } from "uuid";
import incense2 from "./images/incense2.jpg";
import groupYoga from "./images/group-yoga.jpg";
import massageBack from "./images/massage-back.jpg";
import hotStone from "./images/hot-stone.jpg";
function getWorks() {
  return [
    {
      id: uuidv4(),
      title: "Meditation and Worship",
      image: incense2,
      imageAlt: "A person sitting cross-legged holding a brass worship bowl",
      imageCredit: "Conscious Design",
      imageCreditLink: "https://unsplash.com/@conscious_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      url: "/work/meditation-and-worship",
      secondImage: "",
      secondImageAlt: "",
      secondImageCredit: "",
      secondImageCreditLink: "",
      details: [
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
      ]
    },
    {
      id: uuidv4(),
      title: "Yoga",
      image: groupYoga,
      imageAlt: "A room full of people practicing lotus overhead stretch pose while tipped over to the left",
      imageCredit: "Anupam Mahapatra",
      imageCreditLink: "https://unsplash.com/@mister_a?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      url: "/work/yoga",
      secondImage: "",
      secondImageAlt: "",
      secondImageCredit: "",
      secondImageCreditLink: "",
      details: [
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
      ]
    },
    {
      id: uuidv4(),
      title: "Deep Tissue Massage",
      image: massageBack,
      imageAlt: "Someone's hands massaging someone else's upperback",
      imageCredit: "Conscious Design",
      imageCreditLink: "https://unsplash.com/@conscious_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      url: "/work/deep-tissue-massage",
      secondImage: "",
      secondImageAlt: "",
      secondImageCredit: "",
      secondImageCreditLink: "",
      details: [
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
      ]
    },
    {
      id: uuidv4(),
      title: "Hot Stone Massage",
      image: hotStone,
      imageAlt: "A person laying on their stomach with a line of hot stones on their back",
      imageCredit: "engin akyurt",
      imageCreditLink: "https://unsplash.com/@enginakyurt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      url: "/work/hot-stone-massage",
      secondImage: "",
      secondImageAlt: "",
      secondImageCredit: "",
      secondImageCreditLink: "",
      details: [
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
        {
          heading: "",
          description: ""
        },
      ]
    }
  ];
}

export default getWorks;
