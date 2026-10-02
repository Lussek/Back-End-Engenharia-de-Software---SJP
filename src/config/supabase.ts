import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Força o dotenv a carregar o ficheiro .env da raiz
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

// Verificação de segurança para ajudar a debugar se faltar algo
if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error(
    "Erro: SUPABASE_URL ou SUPABASE_SECRET_KEY não foram encontradas no ficheiro .env!"
  );
}

const supabase = createClient(supabaseUrl, supabaseSecretKey);

export default supabase;