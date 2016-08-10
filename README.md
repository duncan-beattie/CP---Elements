Client Portal

# Element Definitions
Elements are defined as code blocks based on data models.

Create the data model as json
```
// _data/demo.json
[
    {
        element_type: "welcome_message",
        user: "Rinky Doodaa"
        cli_ref: "011114567",
        prev_login: "July 3, 2016 09:12:30"
    }
]
```
Then map the data model into output

```
// in - elements.html

{% comment %}  ------|  Welcome Message.

                        expects:
                            element.user - user name
                            cli_ref - Client reference number, optional
                            prev_login - unix timestamp, optional

                        TODO:
                            add some js to convert timestamp
{% endcomment %}

{% when "welcome_message" %}
<div class="welcome">
<h1>Good <span>Morning</span> {{ element.user }}</h1>
{% if element.cli_ref %}
    <ul>
        <li>Client reference: {{ element.cli_ref }}</li>
        {% if element.prev_login %}
        <li data-ts="{{ element.prev_login  }}">Last login: </li>
        {% endif %}
    </ul>
{% endif %}
</div>
```

Create an html stub to pull them together

```
---
layout: demo
permalink: /demo/
---

{% for element in site.data.demo %}
{% include elements.html %}
{% endfor %}


```
