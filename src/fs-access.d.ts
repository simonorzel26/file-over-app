// Extend the Window interface
declare global {
  interface Window {
    showOpenFilePicker(options?: any): Promise<Array<FileSystemFileHandle>>;
  }

  interface FileSystemHandle {
    queryPermission(descriptor?: any): Promise<PermissionState>;
    requestPermission(descriptor?: any): Promise<PermissionState>;
    remove(): Promise<void>;
  }
}

export {};
