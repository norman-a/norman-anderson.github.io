const languages = ['javascript', 'typescript', 'html5', 'css3', 'cpp', 'python', 'java'];
const tools = ['react', 'vue', 'springboot', 'nodejs', 'aws', 'docker'];

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




