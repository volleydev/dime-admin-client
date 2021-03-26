// Hir kommt alles mit Firebase Auth rein

interface Credentials {
  email: string;
  password: string;
}

export const signUp = async ({
  email,
  password,
}: Credentials): Promise<void> => {
  return mockRequest;
};

export const signIn = async ({
  email,
  password,
}: Credentials): Promise<void> => {
  return mockRequest;
};

export const signOut = async (): Promise<void> => {
  return mockRequest;
};

// Für später um password zu resetten
// export const requestResetPassword = async (): Promise<void> => {};
// export const resetPassword = async (): Promise<void> => {};

const mockRequest: Promise<void> = new Promise((res) => {
  // mockt ein request der 2sec geht
  // kannst du für UI loading Verhalten nutzen bevor wir Firebase integriert haben
  setTimeout(() => res(), 2000);
});
