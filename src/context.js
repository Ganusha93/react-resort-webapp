import React, { Component } from 'react'
// import items from "./data";
import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

const RoomContext = React.createContext();


class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };
   
    
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize

        });

    }
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRoom = [...this.state.rooms];
        const room = tempRoom.find(room => room.slug === slug);
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({ [name]: value }, this.filterRooms);


    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price)
        //filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        //filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);

        //filter by size
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );
        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        this.setState({ sortedRooms: tempRooms });

    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const items= [
    {
      sys: {
        id: "1"
      },
      fields: {
        name: "single economy",
        slug: "single-economy",
        type: "single",
        price: 100,
        size: 200,
        capacity: 1,
        pets: false,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img1
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "2"
      },
      fields: {
        name: "single basic",
        slug: "single-basic",
        type: "single",
        price: 150,
        size: 250,
        capacity: 1,
        pets: false,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img2
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "3"
      },
      fields: {
        name: "single standard",
        slug: "single-standard",
        type: "single",
        price: 250,
        size: 300,
        capacity: 1,
        pets: true,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img3
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "4"
      },
      fields: {
        name: "single deluxe",
        slug: "single-deluxe",
        type: "single",
        price: 300,
        size: 400,
        capacity: 1,
        pets: true,
        breakfast: true,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img4
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "5"
      },
      fields: {
        name: "double economy",
        slug: "double-economy",
        type: "double",
        price: 200,
        size: 300,
        capacity: 2,
        pets: false,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img5
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "6"
      },
      fields: {
        name: "double basic",
        slug: "double-basic",
        type: "double",
        price: 250,
        size: 350,
        capacity: 2,
        pets: false,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img6
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "7"
      },
      fields: {
        name: "double standard",
        slug: "double-standard",
        type: "double",
        price: 300,
        size: 400,
        capacity: 2,
        pets: true,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img7
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "8"
      },
      fields: {
        name: "double deluxe",
        slug: "double-deluxe",
        type: "double",
        price: 400,
        size: 500,
        capacity: 2,
        pets: true,
        breakfast: true,
        featured: true,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img8
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "9"
      },
      fields: {
        name: "family economy",
        slug: "family-economy",
        type: "family",
        price: 300,
        size: 500,
        capacity: 3,
        pets: false,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img9
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "10"
      },
      fields: {
        name: "family basic",
        slug: "family-basic",
        type: "family",
        price: 350,
        size: 550,
        capacity: 4,
        pets: false,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img10
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "11"
      },
      fields: {
        name: "family standard",
        slug: "family-standard",
        type: "family",
        price: 400,
        size: 600,
        capacity: 5,
        pets: true,
        breakfast: false,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img11
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "12"
      },
      fields: {
        name: "family deluxe",
        slug: "family-deluxe",
        type: "family",
        price: 500,
        size: 700,
        capacity: 6,
        pets: true,
        breakfast: true,
        featured: true,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: img12
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    },
    {
      sys: {
        id: "13"
      },
      fields: {
        name: "presidential",
        slug: "presidential-room",
        type: "presidential",
        price: 600,
        size: 1000,
        capacity: 10,
        pets: true,
        breakfast: true,
        featured: true,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: [
          "Plush pillows and breathable bed linens",
          "Soft, oversized bath towels",
          "Full-sized, pH-balanced toiletries",
          "Complimentary refreshments",
          "Adequate safety/security",
          "Internet",
          "Comfortable beds"
        ],
        images: [
          {
            fields: {
              file: {
                url: room1
              }
            }
          },
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
          {
            fields: {
              file: {
                url: room3
              }
            }
          },
          {
            fields: {
              file: {
                url: room4
              }
            }
          }
        ]
      }
    }
  ];
const RoomConsumer = RoomContext.Consumer;
export { RoomConsumer, RoomContext, RoomProvider }

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}
