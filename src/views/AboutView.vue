<template>
  <div class="page-about">

    <DraggablePanel title="👤 About Me" :initial-x="0" :initial-y="0" :width="558" :height="245">
      <div class="about-section">
        <div class="about-photo">
          <img src="/images/profile.png" alt="Photo of Ry" />
        </div>
        <div class="about-text">
          <p>[Introduction paragraph — who you are, where you're based, and what drives you.]</p>
          <p>[Background paragraph — your education, career path, or how you got into this field.]</p>
          <p>[Personal paragraph — hobbies, interests, or what you're currently learning.]</p>
          <a href="https://1drv.ms/w/c/bf232f87442282a4/IQC-8eeHKkTIQLN1sLyBoKACAVAyAJWt-s0ZWrZDt6aegN8?e=ho9ldc" class="btn btn-primary" target="_blank" rel="noopener">Download Resume</a>
        </div>
      </div>
    </DraggablePanel>

    <DraggablePanel title="Skills &amp; Technologies" :initial-x="576" :initial-y="18" :width="326" :height="225">
      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.category" class="skill-group">
          <h3>{{ group.category }}</h3>
          <ul>
            <li v-for="skill in group.items" :key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </DraggablePanel>

    <DraggablePanel title="Experience" :initial-x="8" :initial-y="252" :width="900" :height="272">
      <div class="experience-list">
        <div v-for="role in experience" :key="role.title + role.company" class="experience-item">
          <div class="experience-meta">
            <span class="experience-date">{{ role.start }} — {{ role.end }}</span>
            <span class="experience-company">{{ role.company }}</span>
          </div>
          <h3>{{ role.title }}</h3>
          <p>{{ role.description }}</p>
        </div>
      </div>
    </DraggablePanel>

  </div>
</template>

<script setup>
import DraggablePanel from '../components/DraggablePanel.vue'

const skillGroups = [
  {
    category: '[Category — e.g., Languages]',
    items: ['[Skill 1]', '[Skill 2]', '[Skill 3]'],
  },
  {
    category: '[Category — e.g., Frameworks]',
    items: ['[Skill 1]', '[Skill 2]', '[Skill 3]'],
  },
  {
    category: '[Category — e.g., Tools]',
    items: ['[Skill 1]', '[Skill 2]', '[Skill 3]'],
  },
]

const experience = [
  {
    start: '[Start Year]',
    end: 'Present',
    company: '[Company / Organization]',
    title: '[Job Title]',
    description: '[One or two sentences summarizing your responsibilities and impact.]',
  },
  {
    start: '[Start Year]',
    end: '[End Year]',
    company: '[Company / Organization]',
    title: '[Job Title]',
    description: '[One or two sentences summarizing your responsibilities and impact.]',
  },
]
</script>
