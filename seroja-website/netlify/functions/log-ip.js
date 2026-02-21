exports.handler = async (event) => {
  const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown';
  
  // Simpan IP ke file log, database, atau layanan eksternal
  console.log('IP Visitor:', ip); // Log di server Netlify (hanya Anda yang bisa lihat di dashboard)
  
  // Opsional: kirim ke database (misal supabase, mongodb, dll)
  // await saveIpToDatabase(ip);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'IP logged successfully' }), // Jangan kirim IP balik!
  };
};