const https = require('https');
const fs = require('fs');
const path = require('path');

// Image URLs extracted from the website
const mediaUrls = {
  logos: {
    'logo-color.png': 'https://static.wixstatic.com/media/c9c221_353cdfd37beb44a18b86145215d8d814~mv2.png/v1/crop/x_0,y_0,w_3000,h_2888/fill/w_124,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Original%20on%20Transparent.png',
    'logo-black.png': 'https://static.wixstatic.com/media/c9c221_6cd9c67e094d4c1caa4eb22b5d692d11~mv2.png/v1/crop/x_0,y_9,w_3000,h_2950/fill/w_121,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20on%20Transparent.png'
  },
  homepage: {
    'hero-banner.png': 'https://static.wixstatic.com/media/c9c221_25d2612ff0ab46d58135224e86802a77~mv2.png/v1/crop/x_0,y_158,w_1265,h_367/fill/w_1265,h_344,al_c,q_90,enc_avif,quality_auto/Screen%20Shot%202024-01-21%20at%201_37_08%20AM.png',
    'mission-section.png': 'https://static.wixstatic.com/media/c9c221_8f57dc5de0f544388e55f500c0356c25~mv2.png/v1/crop/x_4,y_0,w_508,h_384/fill/w_483,h_365,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2b9029e0-360b-4813-9e63-d881f7c50fe4_heic.png',
    'icon-about.png': 'https://static.wixstatic.com/media/41d000_bc690c771f6b76ca54032f2531339054.png/v1/fill/w_36,h_36,al_c,q_85,enc_avif,quality_auto/41d000_bc690c771f6b76ca54032f2531339054.png',
    'icon-projects.png': 'https://static.wixstatic.com/media/41d000_9b8110099b25b49e85fee909588fd142.png/v1/fill/w_36,h_36,al_c,q_85,enc_avif,quality_auto/41d000_9b8110099b25b49e85fee909588fd142.png',
    'icon-submit.png': 'https://static.wixstatic.com/media/41d000_47a2519675a10293461a2f6b88341f70.png/v1/fill/w_36,h_36,al_c,q_85,enc_avif,quality_auto/41d000_47a2519675a10293461a2f6b88341f70.png'
  },
  projects: {
    'projects-header.jpg': 'https://static.wixstatic.com/media/11062b_f6bec34858fa456ab712aa4018880375~mv2.jpg/v1/fill/w_102,h_67,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_f6bec34858fa456ab712aa4018880375~mv2.jpg',
    chandala: {
      'chandala-main.jpg': 'https://static.wixstatic.com/media/c9c221_2c66230f965445f0a3e69f219aa46ace~mv2.jpg/v1/fill/w_378,h_171,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/884c4310-8187-41f0-b04d-80d1bed7b9c3.jpg'
    },
    hoops: {
      'hoops-preview-1.png': 'https://static.wixstatic.com/media/c9c221_d636a19790fb4bf8adfb2795c1fc4f67~mv2.png/v1/fill/w_386,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_d636a19790fb4bf8adfb2795c1fc4f67~mv2.png',
      'hoops-preview-2.png': 'https://static.wixstatic.com/media/c9c221_f9ac73e644ad4f1e9a976d44ae822d4d~mv2.png/v1/fill/w_386,h_173,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_f9ac73e644ad4f1e9a976d44ae822d4d~mv2.png',
      'hoops-preview-3.jpg': 'https://static.wixstatic.com/media/c9c221_f9e61142c6d6417ca967a7febb5595aa~mv2.jpg/v1/fill/w_340,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202024-10-21%20at%209_24_edited_jp.jpg',
      gallery: {
        'hoops-1.png': 'https://static.wixstatic.com/media/c9c221_b33ffffb223847bcb12cbdb1af22c48c~mv2.png/v1/fill/w_416,h_267,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_b33ffffb223847bcb12cbdb1af22c48c~mv2.png',
        'hoops-2.png': 'https://static.wixstatic.com/media/c9c221_a59ac18917f94dc7bda3c0f69ec16069~mv2.png/v1/fill/w_474,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_a59ac18917f94dc7bda3c0f69ec16069~mv2.png',
        'hoops-3.png': 'https://static.wixstatic.com/media/c9c221_52d729ced9854828a8b8a8ddb8b458dd~mv2.png/v1/fill/w_416,h_292,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_52d729ced9854828a8b8a8ddb8b458dd~mv2.png',
        'hoops-4.png': 'https://static.wixstatic.com/media/c9c221_69cca5735c47458a95977a778a806725~mv2.png/v1/fill/w_464,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_69cca5735c47458a95977a778a806725~mv2.png',
        'hoops-5.png': 'https://static.wixstatic.com/media/c9c221_fa41c26ea9b84c68854dd92cb821895e~mv2.png/v1/fill/w_464,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_fa41c26ea9b84c68854dd92cb821895e~mv2.png',
        'hoops-6.png': 'https://static.wixstatic.com/media/c9c221_44e67ac6fbac45e085bc95cac3f28399~mv2.png/v1/fill/w_359,h_604,al_c,lg_1,q_85,enc_avif,quality_auto/c9c221_44e67ac6fbac45e085bc95cac3f28399~mv2.png',
        'hoops-7.png': 'https://static.wixstatic.com/media/c9c221_6b70d6e486774150b27770c695fda85b~mv2.png/v1/fill/w_600,h_271,al_c,q_85,enc_avif,quality_auto/c9c221_6b70d6e486774150b27770c695fda85b~mv2.png',
        'hoops-8.png': 'https://static.wixstatic.com/media/c9c221_342c41f017ec4bd28436409a32a7c107~mv2.png/v1/fill/w_600,h_267,al_c,q_85,enc_avif,quality_auto/c9c221_342c41f017ec4bd28436409a32a7c107~mv2.png'
      }
    },
    chess: {
      gallery: {
        'chess-1.png': 'https://static.wixstatic.com/media/c9c221_fe65711abef64619ac432750ffef3fdf~mv2.png/v1/fill/w_381,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_fe65711abef64619ac432750ffef3fdf~mv2.png',
        'chess-2.png': 'https://static.wixstatic.com/media/c9c221_82be3d8230f2473ebff3972217f50fc7~mv2.png/v1/fill/w_437,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_82be3d8230f2473ebff3972217f50fc7~mv2.png'
      }
    },
    archery: {
      'archery-1.png': 'https://static.wixstatic.com/media/c9c221_d56a52ad2f934b78af4f6d7f35668c78~mv2.png/v1/fill/w_350,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_d56a52ad2f934b78af4f6d7f35668c78~mv2.png',
      'archery-2.png': 'https://static.wixstatic.com/media/c9c221_b3d7a18d13954c7087b3f0e25f6794fe~mv2.png/v1/fill/w_186,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_b3d7a18d13954c7087b3f0e25f6794fe~mv2.png',
      'archery-3.png': 'https://static.wixstatic.com/media/c9c221_4613ca45f40341888c49427181896f3f~mv2.png/v1/fill/w_345,h_183,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_4613ca45f40341888c49427181896f3f~mv2.png'
    },
    fields: {
      gallery: {
        'fields-1.png': 'https://static.wixstatic.com/media/c9c221_0eca9976493c48f7a384baa0a6817cd0~mv2.png/v1/fill/w_436,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202024-10-27%20at%2010_27_59%20AM.png',
        'fields-2.png': 'https://static.wixstatic.com/media/c9c221_2faad4ca63354598a67bbe6006e79575~mv2.png/v1/crop/x_3,y_0,w_931,h_1178/fill/w_348,h_442,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202024-10-27%20at%2010_27_48%20AM.png'
      }
    },
    odisha: {
      'odisha-1.png': 'https://static.wixstatic.com/media/c9c221_b2725b814846467cada10c27e0e0c4dc~mv2.png/v1/fill/w_382,h_176,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_b2725b814846467cada10c27e0e0c4dc~mv2.png',
      'odisha-2.png': 'https://static.wixstatic.com/media/c9c221_8499aa60f6ae4dea8180a0560a82699d~mv2.png/v1/fill/w_159,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c9c221_8499aa60f6ae4dea8180a0560a82699d~mv2.png'
    }
  },
  team: {
    'raj-keswani.png': 'https://static.wixstatic.com/media/c9c221_1cc2f0f12cf94971a3e4b72f1deecf2a~mv2.png/v1/crop/x_323,y_277,w_474,h_474/fill/w_265,h_265,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202024-01-21%20at%201_21_43%20AM.png',
    'gunjan-sinha.jpg': 'https://static.wixstatic.com/media/c9c221_8393c80bc97a4961ba36c081f22ae468~mv2.jpg/v1/crop/x_0,y_59,w_3024,h_3027/fill/w_265,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-1882.jpg',
    'hanu-mehrotra.png': 'https://static.wixstatic.com/media/c9c221_f324c17dea8b42cdb5fc5d6538247118~mv2.png/v1/crop/x_226,y_17,w_1407,h_1409/fill/w_265,h_265,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/955DD26C-C44F-4965-9716-453D5EE080D2.png',
    'kashish-sharma.jpeg': 'https://static.wixstatic.com/media/c9c221_d9dfa6ce306c4435a677e0f62caa65d0~mv2.jpeg/v1/crop/x_26,y_405,w_587,h_587/fill/w_265,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4602.jpeg',
    'kaili-crabbe.jpg': 'https://static.wixstatic.com/media/c9c221_efb69f2de1ec48b8839cbb1cf1db6003~mv2.jpg/v1/crop/x_0,y_75,w_2400,h_2402/fill/w_265,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Brianne%20Crabbe_hs.jpg',
    'neel-chaterjee.jpg': 'https://static.wixstatic.com/media/c9c221_e74260cd445249c5a3fa135819fb23cb~mv2.jpg/v1/crop/x_47,y_0,w_1103,h_1103/fill/w_265,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5003.jpg'
  },
  story: {
    'story-1.jpg': 'https://static.wixstatic.com/media/c9c221_372de9c1f3ef47bd901ed2228b15cb24f003.jpg/v1/fit/w_610,h_345,q_90,enc_avif,quality_auto/c9c221_372de9c1f3ef47bd901ed2228b15cb24f003.jpg',
    'story-2.png': 'https://static.wixstatic.com/media/c9c221_6b70d6e486774150b27770c695fda85b~mv2.png/v1/fit/w_762,h_345,q_90,enc_avif,quality_auto/c9c221_6b70d6e486774150b27770c695fda85b~mv2.png'
  }
};

// Helper function to create directories recursively
function createDirRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Download function
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filepath}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(filepath);
        downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

// Recursive function to process nested objects
async function processUrls(urls, basePath) {
  for (const [key, value] of Object.entries(urls)) {
    if (typeof value === 'string') {
      // It's a URL, download it
      const filepath = path.join(basePath, key);
      try {
        await downloadFile(value, filepath);
      } catch (err) {
        console.error(`✗ Error downloading ${key}:`, err.message);
      }
    } else {
      // It's a nested object, create directory and recurse
      const newPath = path.join(basePath, key);
      createDirRecursive(newPath);
      await processUrls(value, newPath);
    }
  }
}

// Main execution
async function main() {
  console.log('Starting Sports Forward media download...\n');
  
  const baseDir = path.join(process.cwd(), 'public', 'images');
  createDirRecursive(baseDir);
  
  await processUrls(mediaUrls, baseDir);
  
  console.log('\n✓ Download complete!');
  console.log(`Files saved to: ${baseDir}`);
}

main().catch(console.error);