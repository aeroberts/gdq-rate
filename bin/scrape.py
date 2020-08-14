#!/usr/bin/python3
from bs4 import BeautifulSoup


with open('schedule.html', 'r') as file:
    html_doc = file.read()

soup = BeautifulSoup(html_doc, 'html.parser')

table = soup.find(id="runTable")

records = []

def valuePrint(*args):
    print('(', end='')
    for i, arg in enumerate(args):
        print('\'', end='')
        print(arg.replace('\'', '\'\''), end='')
        print('\'', end='')
        if i < len(args) - 1:
            print(', ', end='')
    print(')', end='')

def getTagContents(tag):
    res = list(filter(bool, list(tag.stripped_strings)))[0]
    if res is None:
        return ""
    return res.strip()

def recordRow(startTime, game, runners, duration, category, platform):
    records.append({
        'startTime': getTagContents(startTime),
        'game': getTagContents(game),
        'runners': getTagContents(runners),
        'duration': getTagContents(duration),
        'category': category.strip(),
        'platform': platform.strip()
    })

for row in table.find_all('tr'):
    # Skip the table headers
    if row.attrs.get('class') == ["day-split"]:
        continue

    if not row.attrs.get('class'):
        startTime, game, runners, setupLength = row.find_all('td')
    else: 
        duration, categoryAndPlatform, host = row.find_all('td')
        category, platform = categoryAndPlatform.string.split('—')
        duration.i.decompose()
        recordRow(startTime, game, runners, duration, category, platform)
        
print("INSERT INTO runs (game, category, runner, duration, platform, starting_at)")
print("VALUES")
comma=False
for r in records:
    if not comma:
        comma=True
    else:
        print(',')
    valuePrint(r['game'], r['category'], r['runners'], r['duration'], r['platform'], r['startTime'])
print()
print("ON CONFLICT (game, category)")
print("DO UPDATE SET runners=EXCLUDED.runners, duration=EXCLUDED.duration, platform=EXCLUDED.platform, starting_at=EXCLUDED.starting_at;")