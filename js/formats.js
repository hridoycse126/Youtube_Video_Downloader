formats = {

    '5': {
        'ext': 'flv', 'width': 400, 'height': 240, 'acodec': 'mp3', 'abr': 64, 'vcodec': 'h263'
    },
    '6': {
        'ext': 'flv', 'width': 450, 'height': 270, 'acodec': 'mp3', 'abr': 64, 'vcodec': 'h263'
    },
    '13': {
        'ext': '3gp', 'acodec': 'aac', 'vcodec': 'mp4v'
    },
    '17': {
        'ext': '3gp', 'width': 176, 'height': 144, 'acodec': 'aac', 'abr': 24, 'vcodec': 'mp4v'
    },
    '18': {
        'ext': 'mp4', 'width': 640, 'height': 360, 'acodec': 'aac', 'abr': 96, 'vcodec': 'h264'
    },
    '22': {
        'ext': 'mp4', 'width': 1280, 'height': 720, 'acodec': 'aac', 'abr': 192, 'vcodec': 'h264'
    },
    
    '34': {
        'ext': 'flv', 'width': 640, 'height': 360, 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264'
    },
    '35': {
        'ext': 'flv', 'width': 854, 'height': 480, 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264'
    },
    // # itag 36 videos are either 320x180 (BaW_jenozKc) or 320x240 (__2ABJjxzNo), abr varies as well
    '36': {
        'ext': '3gp', 'width': 320, 'acodec': 'aac', 'vcodec': 'mp4v'
    },
    '37': {
        'ext': 'mp4', 'width': 1920, 'height': 1080, 'acodec': 'aac', 'abr': 192, 'vcodec': 'h264'
    },

    '38': {
        'ext': 'mp4', 'width': 4096, 'height': 3072, 'acodec': 'aac', 'abr': 192, 'vcodec': 'h264'
    },
    '43': {
        'ext': 'webm', 'width': 640, 'height': 360, 'acodec': 'vorbis', 'abr': 128, 'vcodec': 'VP9'
    },
    '44': {
        'ext': 'webm', 'width': 854, 'height': 480, 'acodec': 'vorbis', 'abr': 128, 'vcodec': 'VP9'
    },
    '45': {
        'ext': 'webm', 'width': 1280, 'height': 720, 'acodec': 'vorbis', 'abr': 192, 'vcodec': 'VP9'
    },
    '46': {
        'ext': 'webm', 'width': 1920, 'height': 1080, 'acodec': 'vorbis', 'abr': 192, 'vcodec': 'VP9'
    },
    '59': {
        'ext': 'mp4', 'width': 854, 'height': 480, 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264'
    },
    '78': {
        'ext': 'mp4', 'width': 854, 'height': 480, 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264'
    },


    // # 3D videos
    '82': {
        'ext': 'mp4', 'height': 360, 'format_note': '3D', 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264', 'preference': -20
    },
    '83': {
        'ext': 'mp4', 'height': 480, 'format_note': '3D', 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264', 'preference': -20
    },
    '84': {
        'ext': 'mp4', 'height': 720, 'format_note': '3D', 'acodec': 'aac', 'abr': 192, 'vcodec': 'h264', 'preference': -20
    },
    '85': {
        'ext': 'mp4', 'height': 1080, 'format_note': '3D', 'acodec': 'aac', 'abr': 192, 'vcodec': 'h264', 'preference': -20
    },
    '100': {
        'ext': 'webm', 'height': 360, 'format_note': '3D', 'acodec': 'vorbis', 'abr': 128, 'vcodec': 'VP9', 'preference': -20
    },
    '101': {
        'ext': 'webm', 'height': 480, 'format_note': '3D', 'acodec': 'vorbis', 'abr': 192, 'vcodec': 'VP9', 'preference': -20
    },
    '102': {
        'ext': 'webm', 'height': 720, 'format_note': '3D', 'acodec': 'vorbis', 'abr': 192, 'vcodec': 'VP9', 'preference': -20
    },

    // # Apple HTTP Live Streaming
    '91': {
        'ext': 'mp4', 'height': 144, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 48, 'vcodec': 'h264', 'preference': -10
    },
    '92': {
        'ext': 'mp4', 'height': 240, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 48, 'vcodec': 'h264', 'preference': -10
    },
    '93': {
        'ext': 'mp4', 'height': 360, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264', 'preference': -10
    },
    '94': {
        'ext': 'mp4', 'height': 480, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 128, 'vcodec': 'h264', 'preference': -10
    },
    '95': {
        'ext': 'mp4', 'height': 720, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 256, 'vcodec': 'h264', 'preference': -10
    },
    '96': {
        'ext': 'mp4', 'height': 1080, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 256, 'vcodec': 'h264', 'preference': -10
    },
    '132': {
        'ext': 'mp4', 'height': 240, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 48, 'vcodec': 'h264', 'preference': -10
    },
    '151': {
        'ext': 'mp4', 'height': 72, 'format_note': 'HLS', 'acodec': 'aac', 'abr': 24, 'vcodec': 'h264', 'preference': -10
    },

    // # DASH mp4 video
    '133': {
        'ext': 'mp4', 'height': 240, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '134': {
        'ext': 'mp4', 'height': 360, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '135': {
        'ext': 'mp4', 'height': 480, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '136': {
        'ext': 'mp4', 'height': 720, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '137': {
        'ext': 'mp4', 'height': 1080, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '138': {
        'ext': 'mp4', 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    //  # Height can vary (https: //github.com/ytdl-org/youtube-dl/issues/4559)
    '160': {
        'ext': 'mp4', 'height': 144, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '212': {
        'ext': 'mp4', 'height': 480, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '264': {
        'ext': 'mp4', 'height': 1440, 'format_note': 'DASH video', 'vcodec': 'h264'
    },
    '298': {
        'ext': 'mp4', 'height': 720, 'format_note': 'DASH video', 'vcodec': 'h264', 'fps': 60
    },
    '299': {
        'ext': 'mp4', 'height': 1080, 'format_note': 'DASH video', 'vcodec': 'h264', 'fps': 60
    },
    '266': {
        'ext': 'mp4', 'height': 2160, 'format_note': 'DASH video', 'vcodec': 'h264'
    },

    // # Dash mp4 audio
    '139': {
        'ext': 'm4a', 'format_note': 'DASH audio', 'acodec': 'aac', 'abr': 48, 'container': 'm4a_dash'
    },
    '140': {
        'ext': 'm4a', 'format_note': 'DASH audio', 'acodec': 'aac', 'abr': 128, 'container': 'm4a_dash'
    },
    '141': {
        'ext': 'm4a', 'format_note': 'DASH audio', 'acodec': 'aac', 'abr': 256, 'container': 'm4a_dash'
    },
    '256': {
        'ext': 'm4a', 'format_note': 'DASH audio', 'acodec': 'aac', 'container': 'm4a_dash'
    },
    '258': {
        'ext': 'm4a', 'format_note': 'DASH audio', 'acodec': 'aac', 'container': 'm4a_dash'
    },
    '325': {
        'ext': 'm4a', 'format_note': 'DASH audio', 'acodec': 'dtse', 'container': 'm4a_dash'
    },
    '328': {
        'ext': 'm4a', 'format_note': 'DASH audio', 'acodec': 'ec-3', 'container': 'm4a_dash'
    },

    // # Dash webm
    '167': {
        'ext': 'webm', 'height': 360, 'width': 640, 'format_note': 'DASH video', 'container': 'webm', 'vcodec': 'VP9'
    },
    '168': {
        'ext': 'webm', 'height': 480, 'width': 854, 'format_note': 'DASH video', 'container': 'webm', 'vcodec': 'VP9'
    },
    '169': {
        'ext': 'webm', 'height': 720, 'width': 1280, 'format_note': 'DASH video', 'container': 'webm', 'vcodec': 'VP9'
    },
    '170': {
        'ext': 'webm', 'height': 1080, 'width': 1920, 'format_note': 'DASH video', 'container': 'webm', 'vcodec': 'VP9'
    },
    '218': {
        'ext': 'webm', 'height': 480, 'width': 854, 'format_note': 'DASH video', 'container': 'webm', 'vcodec': 'VP9'
    },
    '219': {
        'ext': 'webm', 'height': 480, 'width': 854, 'format_note': 'DASH video', 'container': 'webm', 'vcodec': 'VP9'
    },
    '278': {
        'ext': 'webm', 'height': 144, 'format_note': 'DASH video', 'container': 'webm', 'vcodec': 'VP9'
    },
    '242': {
        'ext': 'webm', 'height': 240, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '243': {
        'ext': 'webm', 'height': 360, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '244': {
        'ext': 'webm', 'height': 480, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '245': {
        'ext': 'webm', 'height': 480, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '246': {
        'ext': 'webm', 'height': 480, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '247': {
        'ext': 'webm', 'height': 720, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '248': {
        'ext': 'webm', 'height': 1080, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '271': {
        'ext': 'webm', 'height': 1440, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    // # itag 272 videos are either 3840x2160 (e.g. RtoitU2A-3E) or 7680x4320 (sLprVF6d7Ug)
    '272': {
        'ext': 'webm', 'height': 2160, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '302': {
        'ext': 'webm', 'height': 720, 'format_note': 'DASH video', 'vcodec': 'VP9', 'fps': 60
    },
    '303': {
        'ext': 'webm', 'height': 1080, 'format_note': 'DASH video', 'vcodec': 'VP9', 'fps': 60
    },
    '308': {
        'ext': 'webm', 'height': 1440, 'format_note': 'DASH video', 'vcodec': 'VP9', 'fps': 60
    },
    '313': {
        'ext': 'webm', 'height': 2160, 'format_note': 'DASH video', 'vcodec': 'VP9'
    },
    '315': {
        'ext': 'webm', 'height': 2160, 'format_note': 'DASH video', 'vcodec': 'VP9', 'fps': 60
    },

    // # Dash webm audio
    '171': {
        'ext': 'webm', 'acodec': 'vorbis', 'format_note': 'DASH audio', 'abr': 128
    },
    '172': {
        'ext': 'webm', 'acodec': 'vorbis', 'format_note': 'DASH audio', 'abr': 256
    },

    // # Dash webm audio with opus inside
    '249': {
        'ext': 'webm', 'format_note': 'DASH audio', 'acodec': 'opus', 'abr': 50
    },
    '250': {
        'ext': 'webm', 'format_note': 'DASH audio', 'acodec': 'opus', 'abr': 70
    },
    '251': {
        'ext': 'webm', 'format_note': 'DASH audio', 'acodec': 'opus', 'abr': 160
    },

    // # RTMP (unnamed)
    '_rtmp': {
        'protocol': 'rtmp'
    },

    // # av01 video only formats sometimes served with "unknown" codecs
    '394': {
        'acodec': 'none', 'vcodec': 'av01.0.05M.08'
    },
    '395': {
        'acodec': 'none', 'vcodec': 'av01.0.05M.08'
    },
    '396': {
        'acodec': 'none', 'vcodec': 'av01.0.05M.08'
    },
    '397': {
        'acodec': 'none', 'vcodec': 'av01.0.05M.08'
    },
}