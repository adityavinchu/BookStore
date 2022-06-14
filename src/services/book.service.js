import Book from '../models/book.model';



export const getAllBooks = async () => {
    console.log("all books");
    const data = await Book.find();
    if (data == null) {
        throw new Error("No any book for this user");
    }
    else{
        // await client.set('getAllBooks',JSON.stringify(data));
        return data;
    }
}

export const getBook = async (userId,_id) => {
    console.log("returning particualr Book: ", userId);
    const data = await Book.findById({userId, _id});
    if (data == null) {
        throw new Error("Book by this id don't exist");
    }
    return data;
}