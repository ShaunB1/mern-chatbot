import app from "../src/app.js";
import { connectToDatabase } from "../src/db/connection.js";
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log("Server Open and Connected to Database");
    });
}).catch(err => console.log(err));
//# sourceMappingURL=index.js.map