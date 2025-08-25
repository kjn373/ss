#!/bin/bash
  echo "Starting deployment script"

   # Check if the app folder exists
   if [ -d ~/pawan-prakriti ]; then
       echo "App folder exists. Running pm2 script..."
      pm2 stop ~/pawan-prakriti/pm2.json
       rm -rf ~/pawan-prakriti
   fi
   
   mv build ~/
   mv ~/build ~/pawan-prakriti
   cd ~/pawan-prakriti
   rm -rf node_modules
   pnpm install
   pm2 start ~/pawan-prakriti/pm2.json
   echo "End deployment script"