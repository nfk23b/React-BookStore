export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'test1',
            author: 'test author 1',
            price: 999,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'test2',
            author: 'test author 2',
            price: 999,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        } 
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.data)
            }, 600);
        });
    }
}