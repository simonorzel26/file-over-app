export async function selectFile(): Promise<FileSystemFileHandle | undefined> {
  try {
      const [fileHandle] = await window.showOpenFilePicker();
      if (fileHandle?.kind === "file") {
          return fileHandle;
      }
  } catch (err) {
      console.error('File selection was cancelled or failed', err);
  }
}

export async function verifyPermission(fileHandle: FileSystemFileHandle, withWrite: boolean = false): Promise<boolean> {
  const opts = withWrite ? { mode: "readwrite" } : {};
  if ((await fileHandle.queryPermission(opts)) === "granted") {
      return true;
  }
  if ((await fileHandle.requestPermission(opts)) === "granted") {
      return true;
  }
  return false;
}

export async function removeEntry(fileHandle: FileSystemHandle): Promise<void> {
  try {
      await fileHandle.remove();
  } catch (err) {
      console.error('Failed to remove the file or directory', err);
  }
}
