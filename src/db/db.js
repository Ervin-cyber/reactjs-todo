const DATABASE_NAME = "to_do_indexeddb";
const TABLE_TODOS = "todos"

async function openDb() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DATABASE_NAME, 1);
        request.onupgradeneeded = () => {
            console.log('onupgradeneeded')
            let db = request.result;
            if (!db.objectStoreNames.contains(TABLE_TODOS)) {
                db.createObjectStore(TABLE_TODOS, {
                    keyPath: "id",
                    autoIncrement: true,
                });
            }
        }
        request.onerror = (error) => {
            //console.log(`onerror:${error}`)
            reject(request.error);
        }
        request.onsuccess = (result) => {
            //console.log(`onsuccess:${JSON.stringify(result)}`)
            resolve(request.result);
        }
    })
}

export async function getAll() {
    return new Promise(async (resolve, reject) => {
        const db = await openDb();
        const transaction = db.transaction(TABLE_TODOS, "readonly");
        const todos = transaction.objectStore(TABLE_TODOS).getAll();
        todos.onsuccess = () => {
            console.log(`onsucces:${JSON.stringify(todos.result)}`);
            resolve(todos.result);
        }
        todos.onerror = (error) => {
            console.log(`onerror:${error}`);
            reject(error);
        }
    });
}

export async function addToDo(todo) {
    const db = await openDb();
    const transaction = db.transaction(TABLE_TODOS, "readwrite");
    const store = transaction.objectStore(TABLE_TODOS);
    store.add({ ...todo, status: "In progress" });
    return transaction.complete;
}

export async function deleteToDo(id) {
    const db = await openDb();
    const transaction = db.transaction(TABLE_TODOS, "readwrite");
    const store = transaction.objectStore(TABLE_TODOS);
    store.delete(id);
    return transaction.complete;
}


