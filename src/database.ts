export async function openDatabase(dbName: string, version: number) {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(dbName, version);
      request.onupgradeneeded = (event) => {
        const db = request.result;
        if (!db.objectStoreNames.contains('files')) {
          db.createObjectStore('files', { keyPath: 'id', autoIncrement: true });
        }
      };
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

export async function saveFileData(db: IDBDatabase, data: any) {
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(['files'], 'readwrite');
      const store = transaction.objectStore('files');
      const request = store.put(data);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

export async function getFileData(db: IDBDatabase, id: number) {
    return new Promise<any>((resolve, reject) => {
      const transaction = db.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

export async function deleteFileData(db: IDBDatabase, id: number) {
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(['files'], 'readwrite');
      const store = transaction.objectStore('files');
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
        
export async function removeAllFileData(db: IDBDatabase) {
    return new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(['files'], 'readwrite');
        const store = transaction.objectStore('files');
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}