import admin from 'firebase-admin';

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.ACCOUNT_KEY ?? '') as string,
    ),
  });
}

export default admin;
