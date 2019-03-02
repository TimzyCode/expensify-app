const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName='self-published'} = book.publisher; 
    console.log(`${publisherName}`);

    const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
    const [name, lower_price, medium_price,higher_price] = item;

    console.log(`A medium  ${name} cost ${medium_price}`);


    const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvabia', '19147'];
    const [, city,state= 'NewYork']=address;
    console.log(`You are in the ${city} ${state}.`);