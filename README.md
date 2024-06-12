## login

- user 1
  email : sadam@gmail.com
  password : sadam

- user 2
  email : mahendra@gmail.com
  password : mahendra

## get

- get/kelas
- get/mata_pelajaran?id_mode_pembelajaran=1
- get/material?id_sub_bab=1
- get/bab?id_mata_pelajaran=1
- get/sub_bab?id_bab=1

## post

- auth/login
  body example
  {
  "email" : "sadam@gmail.com",
  "password" : "sadam"
  }

- auth/register
  body exmaple
  {
  "nama_user": "yoputra",
  "email": "yoputra@gmail.com",
  "password": "yoputra"
  }
