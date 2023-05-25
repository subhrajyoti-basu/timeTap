import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbxprhmsescweyfaxyzb.supabase.co";
const supabaseAnonPublic =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieHByaG1zZXNjd2V5ZmF4eXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5ODM5NjksImV4cCI6MjAwMDU1OTk2OX0.SR7sLtmpWKwcJPajTDK65X2m6AJUUDmv_SztZNWP-jk";

export const supabase = createClient(supabaseUrl, supabaseAnonPublic);
