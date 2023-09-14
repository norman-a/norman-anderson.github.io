const languages = ['cpp', 'c', 'python', 'javascript', 'typescript', 'html5', 'css3', 'java'];
const tools = ['embedded', 'vue', 'react', 'springboot', 'nodejs', 'aws', 'docker'];

export const languagesImages = [];
export const toolsImages = [];

gatherImages(languages, languagesImages, 'languages');
gatherImages(tools, toolsImages, 'tools');

function gatherImages(skillNames, images, type) {
  skillNames.forEach((skill, index) => {
    images.push({
      id: index + 1,
      source: process.env.PUBLIC_URL + `/skills/${type}/${skill}.png`,
      name: skill
    });
  });
}




