import { InMemoryDbService } from "angular-in-memory-web-api";
import { Book } from "./book";

export class Testdata implements InMemoryDbService {
    createDb() {
        let bookDetails: Book[] = [
            { id: 1, name: "Marathi", category: 'poem' },
            { id: 2, name: "English", category: 'Literature' },
            { id: 3, name: "Sanskrit", category: 'Lesson' },
            { id: 4, name: "Hindi", category: 'Essay' }
        ]
        return {books:bookDetails};
    }
}