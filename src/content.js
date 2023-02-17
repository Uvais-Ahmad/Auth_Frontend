const productData = [
    // {
    //   id: 1,
    //   name: "MASSDROP X SENNHEISER HD 6XX HEADPHONES",
    //   image:
    //     "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
    //   productType: "openBackHeadphones",
    //   price: 220,
    //   rating: 5,
    //   timeLeft: 27,
    //   totalSales: 7479 
    // },
    // {
    //   id: 2,
    //   name: "DROP + SENNHEISER PC38X GAMING HEADSET",
    //   image:
    //     "https://massdrop-s3.imgix.net/product-images/drop-sennheiser-pc38x-gaming-headset/FP/CeH9BYVoTniYOsScfzZ0_PC.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
    //   productType: "openBackHeadphones",
    //   price: 169,
    //   rating: 5,
    //   timeLeft: 24,
    //   totalSales: 6898
    // },
    // {
    //   id: 3,
    //   name: "MASSDROP HD 58X JUBILEE HEADPHONES",
    //   image:
    //     "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
    //   productType: "openBackHeadphones",
    //   price: 170,
    //   rating: 4,
    //   timeLeft: 21,
    //   totalSales: 6347 
    // },
    // {
    //   id: 4,
    //   name: "DROP + SENNHEISER PC38X GAMING HEADSET",
    //   image:
    //     "https://massdrop-s3.imgix.net/product-images/drop-sennheiser-pc38x-gaming-headset/FP/CeH9BYVoTniYOsScfzZ0_PC.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
    //   productType: "openBackHeadphones",
    //   price: 169,
    //   rating: 5,
    //   timeLeft: 24,
    //   totalSales: 6898
    // },
    // {
    //   id: 5,
    //   name: "MASSDROP X SENNHEISER HD 6XX HEADPHONES",
    //   image:
    //     "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
    //   productType: "openBackHeadphones",
    //   price: 220,
    //   rating: 5,
    //   timeLeft: 27,
    //   totalSales: 7479 
    // },



    {
      keys:1,
      DSIN:'MAG-100471.05',
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      SysListName:'Magmus 3" Brass Locking L Hinges Satin Silver Premium 3" x 3/8 x 1.1/4 x 6 mm',
      MRP:199.00,
      HSNCode:83021020,
      GSTSlab:18.0,
      Unit:4
    },
    {keys:2,
      DSIN:'MAG-100471.08',
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      SysListName:'Magmus 3" Brass Locking L Hinges Satin Black Premium 3" x 3/8 x 1.1/4 x 6 mm',
      MRP:253.00,
      HSNCode:83021020,
      GSTSlab:18.0,
      Unit:2
    },
    {keys:3,
      DSIN:'MAG-100472.05',
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      SysListName:'Magmus 3" Brass Locking L Hinges Satin Silver Premium 3" x 3/8 x 1.1/4 x 12 mm',
      MRP:217.00,
      HSNCode:83021020,
      GSTSlab:18.0,
      Unit:1
    },
    {keys:4,
      DSIN:'MAG-802010.05',
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      SysListName:'Magmus Brass Folding Bracket Premium Satin Silver 2" x 10 mm',
      MRP:210,
      HSNCode:8302,
      GSTSlab:18.0,
      Unit:7
    },
    {keys:5,
      DSIN:'MAG-802012.05',
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      SysListName:'Magmus Brass Folding Bracket Premium Satin Silver 2" x 12 mm',
      MRP:220,
      HSNCode:8302,
      GSTSlab:18.0,
      Unit:7
    },
    {keys:6,
      DSIN:'MAG-103796.07',
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      SysListName:'Magmus Furniture Glide Plint Pin 22 mm',
      MRP:30,
      HSNCode:8302,
      GSTSlab:18.0,
      Unit:4
    },
    {keys:7,
      DSIN:'MAG-100141.00',
      image:
        "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/cJolRuxYSgqdFtmFawp8_yJ6M80CfTZGYMcNKc5of_0cYrqmTrQFOf4cbRVO6t_H6xx%20Reshoot32572.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70",
      SysListName:'Magmus 3" S.S. Butt Door Hinges - Welded Soft Movement Matt 3" x 16',
      MRP:51,
      HSNCode:83021010,
      GSTSlab:18.0,
      Unit:9
    }

  ];
  export default productData;