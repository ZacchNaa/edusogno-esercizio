const cards = [
    {
      slug: "birthday-party",
      eventName: "Birthday Party",
      eventDate: "2024-05-15",
    },
    {
      slug: "wedding-anniversary",
      eventName: "Wedding Anniversary",
      eventDate: "2024-06-20",
    },
    {
      slug: "graduation-ceremony",
      eventName: "Graduation Ceremony",
      eventDate: "2024-07-10",
      handleClick: () => {
        console.log("Clicked on Graduation Ceremony");
      },
    },
  ];
  
  export default cards;
  